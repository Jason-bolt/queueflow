"use server";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "@/utils/firebase";
import {
  setDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
  getDoc,
  addDoc,
} from "firebase/firestore";

const createUser = async (uid: string, email: string, name: string = "") => {
  try {
    const timeStamp = new Date().toISOString();
    const orgUserRef = doc(db, "users", uid);
    setDoc(
      orgUserRef,
      {
        email,
        name,
        role: "admin",
        priviledges: [
          "queue:*",
          "queueUsers:*",
          "organizationMembers:*",
          "organizationSettings:*",
        ],
        createdAt: timeStamp,
      },
      { merge: true },
    );
    console.log("Document written with ID: ", orgUserRef.id);
    return { id: orgUserRef.id, email, name, createdAt: timeStamp };
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const fetchUserOrganization = async (userId: string) => {
  try {
    const user = await fetchUser(userId); // Ensure user exists before fetching organization
    if (!user) {
      console.log("User not found!");
      return null;
    }

    const orgRef = doc(db, "organizations", user!.organizationId || "");
    const orgSnap = await getDoc(orgRef);

    if (!orgSnap.exists()) {
      console.log("No such document!");
      return null;
    }

    const data = { id: orgSnap.id, ...orgSnap.data() } as {
      id: string;
      name: string;
      email: string;
      defaultQueuePrefix: string;
      multiQueueLimit: number;
      subscription: string;
      createdAt: string;
    };
    return data;
  } catch (e) {
    console.error("Error fetching user organization: ", e);
  }
};

const fetchUserByEmail = async (email: string) => {
  try {
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    let userData: any = null;
    querySnapshot.forEach((doc) => {
      userData = { id: doc.id, ...doc.data() };
    });
    return userData;
  } catch (e) {
    console.error("Error fetching user by email: ", e);
  }
};

const fetchUser = async (uid: string) => {
  try {
    const OrgUserRef = doc(db, "users", uid);
    const orgUserSnap = await getDoc(OrgUserRef);

    if (!orgUserSnap.exists()) {
      console.log("No such document!");
      return null;
    }

    const data = { id: orgUserSnap.id, ...orgUserSnap.data() } as {
      id: string;
      email: string;
      name?: string;
      organizationId?: string;
      createdAt: string;
    };

    return data;
  } catch (e) {
    console.error("Error fetching user by email: ", e);
  }
};

const updateData = async (document: string, docId: string, data: object) => {
  try {
    const docRef = doc(db, document, docId);
    await updateDoc(docRef, data);
    console.log("Document updated successfully");
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

const createUserIfNotExists = async (
  uid: string,
  email: string,
  name: string = "",
) => {
  let user = (await fetchUser(uid || "")) as {
    id: string;
    email: string;
    name: string;
    createdAt: string;
  };
  if (!user) {
    user = (await createUser(uid || "", email, name || "")) as {
      id: string;
      email: string;
      name: string;
      createdAt: string;
    };
  }
  return user;
};

const createOrganization = async (
  orgName: string,
  orgEmail: string,
  orgDefaultQueuePrefix: string,
  userId: string,
) => {
  try {
    const organizationRef = await addDoc(collection(db, "organizations"), {
      name: orgName,
      email: orgEmail,
      defaultQueuePrefix: orgDefaultQueuePrefix,
      multiQueueLimit: 5,
      subscription: "free",
      createdAt: new Date().toISOString(),
    });

    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      organizationId: organizationRef.id,
    });
    console.log("Document written with ID: ", organizationRef.id);
    return organizationRef.id;
  } catch (error) {
    console.log("Error adding document: ", error);
  }
};

const updateOrganization = async (
  name: string,
  email: string,
  defaultQueuePrefix: string,
  organizationId: string,
) => {
  try {
    const orgRef = doc(db, "organizations", organizationId);
    setDoc(
      orgRef,
      {
        name,
        email,
        defaultQueuePrefix,
      },
      { merge: true },
    );
    console.log("Document written with ID: ", orgRef.id);
    return { id: orgRef.id, email, name };
  } catch (error) {
    console.log("Error adding document: ", error);
  }
};

export {
  createUser,
  fetchUserByEmail,
  updateData,
  createUserIfNotExists,
  fetchUser,
  fetchUserOrganization,
  createOrganization,
  updateOrganization,
};
