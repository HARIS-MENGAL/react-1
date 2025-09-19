import { HelpCircle } from "lucide-react";
import "../style.css";

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
}

const FaqItem = ({ question, answer }: FaqItemProps) => (
  <div className="mb-10">
    <h3 className="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
      <HelpCircle className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
      {question}
    </h3>
    <div className="text-gray-500 dark:text-gray-400">{answer}</div>
  </div>
);

const faqs: FaqItemProps[] = [
  {
    question: `What do you mean by "Figma assets"?`,
    answer: (
      <p>
        You will have access to download the full Figma project including
        all of the pages, the components, responsive pages, and also the
        icons, illustrations, and images included in the screens.
      </p>
    ),
  },
  {
    question: `What does "lifetime access" exactly mean?`,
    answer: (
      <p>
        Once you have purchased either the design, code, or both packages,
        you will have access to all of the future updates based on the
        roadmap, free of charge.
      </p>
    ),
  },
  {
    question: "How does support work?",
    answer: (
      <>
        <p>
          We're aware of the importance of well qualified support, that is why
          we decided that support will only be provided by the authors that
          actually worked on this project.
        </p>
        <p>
          Feel free to{" "}
          <a
            href="#"
            className="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
          >
            contact us
          </a>{" "}
          and we'll help you out as soon as we can.
        </p>
      </>
    ),
  },
  {
    question: "I want to build more than one project. Is that allowed?",
    answer: (
      <>
        <p>
          You can use Windster for an unlimited amount of projects, whether
          it's a personal website, a SaaS app, or a website for a client. As
          long as you don't build a product that will directly compete with
          Windster either as a UI kit, theme, or template, it's fine.
        </p>
        <p>
          Find out more information by{" "}
          <a
            href="#"
            className="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
          >
            reading the license
          </a>
          .
        </p>
      </>
    ),
  },
  {
    question: "What does 'free updates' include?",
    answer: (
      <p>
        The free updates that will be provided are based on the{" "}
        <a
          href="#"
          className="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
        >
          roadmap
        </a>
        . It is also possible that we will provide extra updates outside of the
        roadmap as well.
      </p>
    ),
  },
  {
    question: "What does the free version include?",
    answer: (
      <>
        <p>
          The{" "}
          <a
            href="#"
            className="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
          >
            free version
          </a>{" "}
          of Windster includes minimal style guidelines, component variants, and
          a dashboard page with the mobile version alongside it.
        </p>
        <p>
          You can use this version for any purposes, because it is open-source
          under the MIT license.
        </p>
      </>
    ),
  },
  {
    question: "What is the difference between Windster and Tailwind UI?",
    answer: (
      <>
        <p>
          Although both Windster and Tailwind UI are built for integration with
          Tailwind CSS, the main difference is in the design, the pages, the
          extra components and UI elements that Windster includes.
        </p>
        <p>
          Additionally, Windster is a project that is still in development,
          and later it will include both the application, marketing, and
          e-commerce UI interfaces.
        </p>
      </>
    ),
  },
  {
    question: "Can I use Windster in open-source projects?",
    answer: (
      <>
        <p>
          Generally, it is accepted to use Windster in open-source projects, as
          long as it is not a UI library, a theme, or a template that would
          compete with Windster itself.
        </p>
        <p>
          With that being said, feel free to use this design kit for your
          open-source projects.
        </p>
        <p>
          Find out more information by{" "}
          <a
            href="#"
            className="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
          >
            reading the license
          </a>
          .
        </p>
      </>
    ),
  },
];

const Faq = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Frequently asked questions
        </h2>
        <div className="grid border-t border-gray-200 pt-8 text-left md:grid-cols-2 md:gap-16 dark:border-gray-700">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
