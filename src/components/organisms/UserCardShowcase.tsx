import { SectionHeader } from "../atoms/Typography";
import { UserCard } from "../molecules/UserCard";

const USERS = [
  { name: "Alex Morgan", role: "Product Designer" },
  { name: "Taylor Chen", role: "Frontend Engineer" },
  { name: "Jordan Lee", role: "Accessibility Lead" },
];

export function UserCardShowcase() {
  return (
    <section className="flex flex-col gap-6 border-t border-zinc-200 pt-10 dark:border-white/10">
      <SectionHeader>User cards</SectionHeader>
      <div className="grid gap-3 md:grid-cols-3">
        {USERS.map((user) => (
          <UserCard key={user.name} name={user.name} role={user.role} />
        ))}
      </div>
    </section>
  );
}
