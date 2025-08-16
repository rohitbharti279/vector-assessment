import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import logo from './assets/vectorshift_logo.png';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#10172a] to-[#1c2536]">
      <header className="flex items-center gap-4 bg-gradient-to-br from-[#10172a] to-[#1c2536] text-white p-4 border-b border-[#232946] shadow">
        <img src={logo} alt="VectorShift Logo" className="h-8 w-auto" />
        <h1 className="text-xl font-bold tracking-wide">VectorShift Pipeline Builder</h1>
      </header>

      <PipelineToolbar />

      <main className="flex-grow flex flex-col items-center justify-center">
        <PipelineUI />
      </main>

      <footer className="bg-gradient-to-br from-[#10172a] to-[#1c2536] p-4 border-t border-[#232946]">
        <SubmitButton />
      </footer>
    </div>
  );
}

export default App;