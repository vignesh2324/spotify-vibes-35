import Header from "./Header";
import Sidebar from "./Sidebar";
import PlayerBar from "./PlayerBar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 pb-24">
          {children}
        </main>
      </div>
      
      <PlayerBar />
    </div>
  );
}