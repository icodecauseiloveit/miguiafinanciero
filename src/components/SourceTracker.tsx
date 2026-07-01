"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function SourceTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const source = searchParams.get("source") || searchParams.get("ref");
      if (source) {
        localStorage.setItem("mgf_source", source);
      }
    }
  }, [searchParams]);

  return null;
}
