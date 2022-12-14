import Head from "next/head";
import Button from "../components/Button";
import Circles from "../components/Circles";
import Content from "../components/Content";
import FloatingLogo from "../components/FloatingLogo";
import Links from "../components/Links";
import Waves from "../components/Waves";

export default function About() {
  return (
    <div>
      <Head>
        <title>Dream your film now, without limits.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/logo.svg" />
      </Head>

      <main className="main">
        <Links active="learnmore" />

        <Content>
          <p>Hi there, </p>
          <p>
            Are you an actor looking for an opportunity to express your talents?
            Are you a filmmaker looking for talents for your film? Are you a
            technician who wants to work with films?
          </p>
          <p>
            Here we are connecting talents and filmmakers all over the world.
            Register with us now and a new journey begins.
          </p>
          <p>
            Dream Your Film is an upcoming startup connecting filmmakers with
            actors and technicians. We are trying to make a community where film
            lovers can connect each other and plan their next projects easily.
            This is the first step of our process and you are lucky to find this
            website.
          </p>
          <p>
            Fill out the registration form with your details and you are ready
            to go. If you are a filmmaker, we would help you find the best cast
            and crew for your project after registering with us.
          </p>
          <p>
            Also, don&apos;t forget to share this with others who deserve an
            opportunity. Note that our mobile app would be live soon where you
            can organise your film projects easily.
          </p>
          <Button link="https://forms.gle/KfVsqh61RTD8pCDk9">
            Register Now
          </Button>
        </Content>

        <Waves />

        <FloatingLogo />

        <Circles />
      </main>
    </div>
  );
}
