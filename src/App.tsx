import useMediaQuery from "./hooks/useMediaQuery";
import Sidebar from "./components/Sidebar";
import Heading from "./components/Heading";
import FormFooter from "./components/FormFooter";
import Form from "./components/Form";

function App() {
  const isLargeScreen = useMediaQuery("(min-width: 770px)");

  return (
    <main className="h-[100vh] bg-magnolia font-Ubuntu md:flex md:items-center md:justify-center">
      {/* MAIN CONTAINER */}
      <section
        className="flex flex-col h-full bg-mobile-sidebar bg-top bg-no-repeat bg-contain
      md:grid md:grid-cols-[1fr_3fr] md:bg-white md:bg-none md:w-[1200px] md:h-[750px] md:p-5 md:rounded-2xl
      md:shadow-lg"
      >
        {/* SIDEBAR */}
        <Sidebar isLargeScreen={isLargeScreen} />
        {/* TEXT AND FORM AREA */}
        <div className="grid h-full md:px-28">
          <div className="w-[90%] mx-auto p-5 rounded-lg bg-white shadow-lg md:w-full md:shadow-none">
            {/* TITLE AND SUBTITLE */}
            <Heading />
            {/* INPUT FIELDS */}
            <Form />
          </div>
          <FormFooter />
        </div>
      </section>
    </main>
  );
}

export default App;
