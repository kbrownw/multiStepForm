import useMediaQuery from "./hooks/useMediaQuery";
import Sidebar from "./components/Sidebar";
import Heading from "./components/Heading";
import FormFooter from "./components/FormFooter";
import Form from "./components/Form";
import { useStepContext } from "./context/StepContext";
import ThankYou from "./components/ThankYou";

function App() {
  const isLargeScreen = useMediaQuery("(min-width: 770px)");
  const {
    handleSubmit,
    formState: { isValid, dirtyFields, isSubmitSuccessful },
  } = useStepContext();

  const onSubmit = handleSubmit((data) => {
    if (isValid && dirtyFields) {
      if (
        dirtyFields["plan"] &&
        dirtyFields["name"] &&
        dirtyFields["email"] &&
        dirtyFields["phone"]
      ) {
        console.log("Data", data);
      }
    }
  });

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
        <form className="grid h-full md:w-[80%] md:mx-auto" onSubmit={onSubmit}>
          <div className="self-start w-[90%] mx-auto p-5 rounded-lg bg-white shadow-lg md:w-full md:h-full md:shadow-none">
            {isSubmitSuccessful ? (
              <ThankYou />
            ) : (
              <>
                {/* TITLE AND SUBTITLE */}
                <Heading />
                {/* INPUT FIELDS */}
                <Form />
              </>
            )}
          </div>
          {!isSubmitSuccessful && <FormFooter />}
        </form>
      </section>
    </main>
  );
}

export default App;
