import { create } from "zustand";
import { SafeListing, SafeUser } from "../types";

interface ContactModalStore {
  isOpen: boolean;
  user: SafeUser | null | undefined; // Add user here
  listing: SafeListing | null | undefined; // Add listing here
  onOpen: (user: SafeUser | null | undefined, listing: SafeListing) => void;
  onClose: () => void;
}

const useContactModal = create<ContactModalStore>((set) => ({
  isOpen: false,
  user: null, // Initialize user as null
  listing: null, // Initialize listing as null
  onOpen: (user, listing) => set({ isOpen: true, user, listing }),
  onClose: () => set({ isOpen: false, user: null, listing: null }),
}));

export default useContactModal;
