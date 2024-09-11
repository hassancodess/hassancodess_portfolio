import { cn } from "./ui/utils.ts";
import { Simple } from "./icons";

// TODO : update stacks
const stacks = [
  {
    name: "TypeScript",
    category: "Language",
    icon: Simple.IconTypeScript,
  },
  {
    name: "Python",
    category: "Language",
    icon: Simple.IconPython,
  },
  {
    name: "React",
    category: "Web",
    icon: Simple.IconReact,
    url: "#",
  },
  {
    name: "Next.js",
    category: "Web",
    icon: Simple.IconNext,
    url: "#",
  },
  {
    name: "Expo",
    category: "Mobile",
    icon: Simple.IconExpo,
    url: "#",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: Simple.IconNodeJS,
    url: "#",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: Simple.IconExpressJS,
    url: "#",
  },

  {
    name: "Docker",
    category: "Backend",
    icon: Simple.IconDocker,
    url: "#",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: Simple.IconMongoDB,
    url: "#",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: Simple.IconPostgreSQL,
    url: "#",
  },
  {
    name: "Jest",
    category: "Testing",
    icon: Simple.IconJest,
    url: "#",
  },
  {
    name: "AWS",
    category: "Cloud",
    icon: Simple.IconAWS,
    url: "#",
  },
];

export default () => {
  return (
    <div className="flex items-start justify-center p-4 md:p-5 xl:p-6 w-full h-full">
      <ul className="grid grid-cols-4  gap-3 w-full">
        {stacks.map((stack) => {
          return (
            <li key={stack.name} className="flex items-center">
              <div
                className={cn(
                  "group",
                  "flex items-center justify-between px-4 py-3 w-full",
                  "bg-neutral-2 hover:bg-neutral-3",
                  "outline-none border border-neutral-4 hover:border-neutral-6 rounded-3xl",
                  "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
                )}
                aria-label="Open"
              >
                <div className="flex flex-row items-stretch gap-5 pl-2">
                  <div className="flex items-center justify-center">
                    <stack.icon
                      size={24}
                      className="transition duration-300 group-hover:-translate-y-1 text-neutral-10 group-hover:text-neutral-11"
                    />
                  </div>

                  <div>
                    <h3 className="transition duration-300 group-hover:translate-x-1 text-neutral-12 text-sm">{stack.name}</h3>
                    <div className="transition duration-300 group-hover:translate-x-px text-neutral-10 group-hover:text-neutral-11 text-xs">
                      {stack.category}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
