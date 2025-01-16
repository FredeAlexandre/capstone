import { createServerFn } from "@tanstack/start";
import { getWebRequest } from "vinxi/http";
import { auth } from "~/utils/auth";

import { db } from "@captsone/db/client";
import { user } from "@captsone/db/schema";
import { eq } from "drizzle-orm";

export const fetchUser = createServerFn({ method: "GET" }).handler(async () => {
  const request = getWebRequest();

  const session = await auth.api.getSession({
    headers: request.headers,
  });

  return session;
});

export const isFirstLaunch = createServerFn({ method: "GET" }).handler(
  async () => {
    const admins = await db
      .select()
      .from(user)
      .where(eq(user.role, "admin"))
      .limit(1);

    return admins.length === 0;
  },
);
