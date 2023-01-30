import { component$, useContext } from "@builder.io/qwik";
import { TabsContext } from "library";

export default component$(() => {
  // const tabState = useContext(TabsContext);
  return (
    <>
      <button className={'btn btn-primary'}>Click to change active tab</button>
    </>
  );
});

