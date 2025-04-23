// components/auth/SignupDialog.tsx
'use client';

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SignupForm } from "@/components/auth/SignupForm";

export default function SignupDialog() {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="sm">Sign up</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[420px]">
                <DialogHeader>
                    <DialogTitle className="text-center">Sign Up</DialogTitle>
                </DialogHeader>
                <SignupForm />
            </DialogContent>
        </Dialog>
    );
}
