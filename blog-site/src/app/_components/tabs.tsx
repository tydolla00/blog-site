import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shadcn/ui/card";
import {
  Tabs as ShadTabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shadcn/ui/tabs";

export default function Tabs({
  stages,
  children,
  title,
  desc,
}: {
  stages: number;
  children?: React.ReactNode;
  title: string;
  desc: string;
}) {
  const renderTabs = () => {
    const tabs = [];
    if (stages < 1) return;
    for (let i = 1; i <= stages; i++) {
      tabs.push(<TabsTrigger value={`stage${i}`}>Stage {i}</TabsTrigger>);
    }
    return <>{tabs}</>;
  };
  return (
    <ShadTabs defaultValue="stage1">
      <TabsList>{renderTabs()}</TabsList>
      <TabsContent value="stage1">
        <Card>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{desc}</CardDescription>
          </CardHeader>
          <CardContent>{children}</CardContent>
        </Card>
      </TabsContent>
    </ShadTabs>
  );
}
