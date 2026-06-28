export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Welcome to STUWO Org
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="rounded-lg border border-gray-300 p-6 hover:border-blue-500 transition-colors">
            <h2 className="text-xl font-semibold mb-3">Getting Started</h2>
            <p className="text-gray-600">
              Edit <code className="bg-gray-100 px-2 py-1 rounded">src/app/page.tsx</code> and save to see changes.
            </p>
          </div>
          
          <div className="rounded-lg border border-gray-300 p-6 hover:border-blue-500 transition-colors">
            <h2 className="text-xl font-semibold mb-3">Learn</h2>
            <p className="text-gray-600">
              Learn more about <a href="https://nextjs.org" className="text-blue-500 hover:underline">Next.js</a> in the documentation.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
