import RequestDemoLeft from "../components/RequestDemoLeft/RequestDemoLeft";
import RequestDemoForm from "../components/RequestDemoForm/RequestDemoForm";
import Footer from "../components/Footer/Footer";
import "./RequestDemoPage.css";

export default function RequestDemoPage() {
   return (
    <>
    <main className="request-demo-page">
      <div className="request-demo-page__container">
        <RequestDemoLeft />
        <RequestDemoForm />
      </div>
    </main>
    <Footer />
    </>
 );
}