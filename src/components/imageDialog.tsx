import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

const ImageDialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="bg-[#252525] border-none">
        <DialogHeader>{children}</DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;
