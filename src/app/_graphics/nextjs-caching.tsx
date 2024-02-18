"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shadcn/ui/card";
import { Slider } from "@/shadcn/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shadcn/ui/tabs";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
import { useState } from "react";
import GroceryPic from "../../../public/grocery.png";
import Car from "../../../public/car.png";
import House from "../../../public/house.png";
import Flag from "../../../public/flag.png";

export function GroceryGraphic() {
  return (
    <div className="w-full">
      <Tabs defaultValue="stage1">
        <TabsList>
          <TabsTrigger value="stage1">Stage 1</TabsTrigger>
          <TabsTrigger value="stage2">Stage 2</TabsTrigger>
          <TabsTrigger value="stage3">Stage 3</TabsTrigger>
        </TabsList>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <TabsContent value="stage1">
            <Stage1 />
          </TabsContent>
          <TabsContent value="stage2">
            <Stage2 />
          </TabsContent>
          <TabsContent value="stage3">
            <Stage3 />
          </TabsContent>
        </motion.div>
      </Tabs>
    </div>
  );
  function Stage1() {
    const [scope, animate] = useAnimate(); // if clicking tab need to click refresh in order to rerender results.
    const [sliderValue, setSliderValue] = useState(100);
    return (
      <GroceryContainer
        description="You go grocery shopping and need to
        bring all of the groceries to the house. So you bring each bag
        one by one from the car to the house. This may not be the most
        optimal solution. Can you think of any way to optimize this?
        Drag the slider to simulate this scenario."
      >
        <div ref={scope}>
          <Image
            id="groceries"
            className="ml-auto"
            src={GroceryPic}
            alt="House"
            width={100}
            height={100}
          />
        </div>
        <Slider
          value={[sliderValue]}
          onValueChange={(val) => {
            setSliderValue(val[0]);
            scope.current && animate(scope.current, { x: (val[0] - 100) * 4 });
          }}
          className="bg-green-700 my-4"
          defaultValue={[100]}
          max={100}
          step={1}
        />
      </GroceryContainer>
    );
  }

  function Stage2() {
    return (
      <GroceryContainer
        mid
        description="What if, instead of bringing each grocery bag one by one to the house,
              we grab multiple at one time and leave it at the midway mark between
              our house and vehicle. That way when we bring the groceries into our
              home we only have to walk a short distance to grab the groceries we
              need. Let's say you have perishables, you want to get those into the
              fridge as quickly as possible."
      >
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 2,
            ease: "easeOut",
            repeat: Infinity,
            delay: 1,
          }}
        >
          <Image
            id="groceries"
            className="ml-auto"
            src={GroceryPic}
            alt="House"
            width={100}
            height={100}
          />
        </motion.div>
      </GroceryContainer>
    );
  }

  function Stage3() {
    return (
      <GroceryContainer
        mid
        description="We've now 'cached' our work. Getting our groceries into our home is much faster
              now."
      >
        <motion.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: 10,
          }}
        >
          <Image
            id="groceries"
            src={GroceryPic}
            alt="House"
            width={100}
            height={100}
          />
        </motion.div>
      </GroceryContainer>
    );
  }

  function GroceryContainer({
    children,
    description,
    mid,
  }: {
    children: React.ReactNode;
    description: string;
    mid?: boolean;
  }) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Grocery Shopping Simulation</CardTitle>
          <CardDescription className="selection:bg-slate-500">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <section className={`${mid ? "grid-cols-3" : "grid-cols-2"} grid `}>
            <div className="flex flex-col items-center">
              <div className="text-center">House</div>
              <Image src={House} alt="House" width={100} height={100} />
            </div>
            {mid && (
              <div className="flex flex-col items-center">
                <div className="text-center">Mid Way</div>
                <Image src={Flag} alt="Flag" width={100} height={100} />
              </div>
            )}
            <div className="flex flex-col items-center">
              <div className="text-center">Car with Groceries</div>
              <Image src={Car} alt="Car" width={200} height={200} />
            </div>
          </section>
          {children}
        </CardContent>
      </Card>
    );
  }
}
