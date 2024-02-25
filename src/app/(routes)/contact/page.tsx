import { StickyScroll } from "@/app/_components/aceternity/sticky-scroll";

export default function Contact() {
  return (
    <>
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">Hi.</div>
        </div>
      </div>
      <StickyScroll
        content={[
          {
            title: "Test",
            description:
              "test descriptionTest4 descriptiondndnndndnnnnnnTest4 descriptiondndnndndnnnnnn",
          },
          {
            title: "Test2",
            description:
              "Test2 descriptionTest4 descriptiondndnndndnnnnnnTest4 descriptiondndnndndnnnnnn",
          },
          {
            title: "Test3",
            description:
              "Test3 descriptionTest4 descriptiondndnndndnnnnnnTest4 descriptiondndnndndnnnnnn",
          },
          { title: "Test4", description: "Test4 descriptiondndnndndnnnnnn" },
        ]}
      />
    </>
  );
}
