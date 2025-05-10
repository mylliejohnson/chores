import ChoresCard from "./components/ChoresCard";

export default function Home() {
  return (
    <div>
      <div>Calendar</div>
      <div className="grid items-center justify-items-center  p-8 pb-10 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {/* <div className="text-2xl font-bold p-4">You're bored chores</div> */}

        {/* include link for spin wheel!! make it fun*/}
        {/* jump to today for all sections */}

        <div className="flex md:flex-row flex-col justify-center gap-10">
          <ChoresCard title="Daily Chores" date="today" taskList={[]} />
          <ChoresCard
            title="Weekly Chores"
            date="May 10 - May 18"
            taskList={[]}
          />
          <ChoresCard title="Monthly Chores" date="May" taskList={[]} />
        </div>
      </div>
    </div>
  );
}
