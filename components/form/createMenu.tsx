"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

type Inputs = {
  name: string;
  description: string;
};
export const CreateMenu = () => {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);

    console.log(data);

    const res = await fetch("https://dns-back.onrender.com/menu-create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res.ok);
    if (res.ok) {
      setSuccess(true);
      setLoading(false);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    //   window.location.reload();
    } else {
      setError(true);
      setLoading(false);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-5 border-2 border-white shadow-lg rounded-2xl">
      <p className="text-2xl font-bold uppercase text-white">Create A MENu</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label className="text-white">Menu Name</Label>
          <Input
            placeholder="Menu Name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500 text-xs">This field is required</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-white">Menu Description</Label>
          <Input
            placeholder="Menu Description"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className="text-red-500 text-xs">This field is required</span>
          )}
        </div>

        {success && (
          <span className="text-green-500 text-xs">Menu created</span>
        )}
        {error && (
          <span className="text-red-500 text-xs">Menu not created</span>
        )}

        <Button disabled={loading} type="submit">
          {loading ? "saving" : "Save"}
        </Button>
      </form>
    </div>
  );
};
