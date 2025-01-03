import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type TabType = {
    id: 'easter' | 'christmas' | 'new_year' | 'personalized' | string;
    label: string;
    func: () => React.ReactNode;
}

type TabProps = {
    types: TabType[];
}

function Tab({ types }: TabProps) {
   return (
        <Tabs defaultValue="account" className="w-[100%] text-lg mt-[10px]">
            <TabsList className="h-10 text-lg">
                {types.map((item) => (
                    <TabsTrigger className="text-lg" key={item.id} value={item.id}>{item.label}</TabsTrigger>
                ))}
            </TabsList>

            {types.map((item) => (
                <TabsContent className="" key={item.id} value={item.id}>{<item.func />}</TabsContent>
            ))}
        </Tabs>
   ) 

}

export default Tab;
