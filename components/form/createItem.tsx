"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

type Inputs = {
  menuId: string;
  name: string;
  description: string;
  price: number;
};

export const CreateItem = ({ id }: { id: string }) => {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    data.menuId = id;
    const res = await fetch("https://dns-back.onrender.com/item-create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setSuccess(true);
      setLoading(false);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
      window.location.reload();
    } else {
      setError(true);
      setLoading(false);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/qwer.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent overlay on the background image
      }}
    >
      <div className="flex flex-col gap-4 p-5 border-2 shadow-lg m-5 rounded-2xl border-white text-white bg-opacity-90">
        <p className="text-2xl font-bold uppercase">ADD ITEM TO MENU</p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label>Item Name</Label>
            <Input className="text-black"
              placeholder="Item Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label>Item Description</Label>
            <Input className="text-black"
              placeholder="Item Description"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label>Item Price</Label>
            <Input className="text-black"
              step={0.01}
              type="number"
              placeholder="Item Price"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>
          {success && (
            <span className="text-green-500 text-xs">Item created</span>
          )}
          {error && (
            <span className="text-red-500 text-xs">Item not created</span>
          )}
          <Button disabled={loading} type="submit">
            {loading ? "Saving..." : "Save"}
          </Button>
        </form>
      </div>
    </div>
  );
};
