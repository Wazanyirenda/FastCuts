"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const REF_COOKIE = "fastcuts_ref";

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
}

export function AffiliateTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("ref");
    if (!code) return;

    setCookie(REF_COOKIE, code, 30);

    fetch("/api/affiliate/track-click", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    }).catch(() => undefined);
  }, [searchParams]);

  return null;
}
