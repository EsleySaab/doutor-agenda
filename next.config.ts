import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://lh3.googleusercontent.com/a/ACg8ocKkc3b6oRcd3GiZsDK8VYNlUXwfkDpOtVZblNICCF03tHWZgQ=s96-c",
      ),
    ],
  },
};

export default nextConfig;
