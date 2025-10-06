import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@ankit526",
    icon: Icons.gitHub,
    link: "https://github.com/ankit526",
  },
  {
    name: "LinkedIn",
    username: "Ankit Sen",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/ankit-sen-29778320a",
  },
  {
    name: "Gmail",
    username: "senankit379",
    icon: Icons.gmail,
    link: "mailto:senankit379@gmail.com",
  },
];
