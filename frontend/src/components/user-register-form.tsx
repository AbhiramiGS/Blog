"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { useRouter } from "next/navigation";

interface UserRegisterFormProps extends React.HTMLAttributes<HTMLDivElement> {}

interface FormData {
  name: string;
  age: number;
  gender: string;
  phone: string;
  email: string;
  password: string;
}

export function UserRegisterForm({
  className,
  ...props
}: UserRegisterFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    age: 0,
    gender: "",
    phone: "",
    email: "",
    password: "",
  });

  const router = useRouter();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
      {
        name: formData.name,
        age: formData.age,
        gender: formData.gender,
        phone: formData.phone,
        email: formData.email,
        password: formData.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    router.push("/login");

    setFormData({
      name: "",
      age: 0,
      gender: "",
      phone: "",
      email: "",
      password: "",
    });

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-8", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-3">
            <Label className="sr-only" htmlFor="name">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Label className="sr-only" htmlFor="age">
              Age
            </Label>
            <Input
              id="age"
              placeholder="Age"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              autoCapitalize="none"
              autoComplete="age"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Select
              onValueChange={(value) =>
                setFormData((prevData) => ({
                  ...prevData,
                  gender: value,
                }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="MALE">Male</SelectItem>
                  <SelectItem value="FEMALE">Female</SelectItem>
                  <SelectItem value="OTHER">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Label className="sr-only" htmlFor="phone">
              Phone
            </Label>
            <Input
              id="phone"
              placeholder="Phone"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              autoCapitalize="none"
              autoComplete="phone"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="********"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button  className="bg-[#9f9763]" disabled={isLoading}>Sign Up</Button>
        </div>
      </form>
    </div>
  );
}
