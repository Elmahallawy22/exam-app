import { editProfileAction } from "@/lib/actions/edit-profile.action";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useEditProfile() {
  // mutation
  const { mutate, isPending, error } = useMutation({
    mutationFn: async (fields: { firstName: string; lastName: string; username: string; email: string; phone: string }) => {
      const payload = await editProfileAction({
        firstName: fields.firstName,
        lastName: fields.lastName,
        username: fields.username,
        email: fields.email,
        phone: fields.phone,
      });

      if ("code" in payload) {
        throw new Error(payload.message);
      }

      return payload;
    },
    onSuccess: () => {
      toast.success("Successful Edit Profile");
    },
  });

  return { editProfile: mutate, isPending, error };
}
