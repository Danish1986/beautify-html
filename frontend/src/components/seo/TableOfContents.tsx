import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  title?: string;
}

export function TableOfContents({ title = "On This Page" }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extract h2 and h3 headings from the page
    const headings = document.querySelectorAll("h2, h3");
    const items: TocItem[] = [];

    headings.forEach((heading) => {
      if (!heading.id) {
        // Generate an ID if it doesn't have one
        heading.id = heading.textContent?.toLowerCase().replace(/\s+/g, "-") || "";
      }
      items.push({
        id: heading.id,
        text: heading.textContent || "",
        level: parseInt(heading.tagName[1]),
      });
    });

    setTocItems(items);

    // Set up intersection observer for active section highlighting
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%" }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (tocItems.length === 0) return null;

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <nav className="space-y-1">
            {tocItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`block w-full text-left text-sm py-2 px-3 rounded-md transition-colors ${
                  item.level === 3 ? "pl-6" : ""
                } ${
                  activeId === item.id
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {item.text}
              </button>
            ))}
          </nav>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
