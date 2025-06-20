"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { cn, splitTags } from "@/lib/utils";
import { badgeVariants } from "./ui/badge";

type TagListProps = {
  languages: string[] | string;
  className?: string;
};

const TagList: React.FC<TagListProps> = ({ languages, className }) => {
  let tagArray: string[] = [];

  if (typeof languages === "string") {
    tagArray = splitTags(languages);
  } else if (Array.isArray(languages)) {
    tagArray = languages;
  }

  if (!tagArray || tagArray.length === 0) return null;
  const router = useRouter();

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tagArray.map((lang, idx) => (
                
                <Button
        className={cn(
          badgeVariants(),
          "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
        )}
        key={lang}
        onClick={() => {
          router.push(`/?search=${lang}`);
        }}
      >
        {lang}
      </Button>


      ))}
    </div>
  );
};

export default TagList;

