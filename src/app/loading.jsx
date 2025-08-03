export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `conic-gradient(from 45deg at 50% 50%, #ef4444 0deg, transparent 90deg, transparent 270deg, #ef4444 360deg)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Main Loading Animation */}
      <div className="relative mb-8">
        {/* Outer Ring - Rotating */}
        <div className="animate-spin rounded-full h-24 w-24 border-4 border-transparent border-t-red-500 border-r-red-500"></div>
        
        {/* Inner Ring - Counter Rotating */}
        <div className="absolute top-2 left-2 animate-spin rounded-full h-20 w-20 border-4 border-transparent border-b-red-400 border-l-red-400" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        
        {/* Center Pulse */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse"></div>
        </div>
        
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-500/20 rounded-full animate-ping"></div>
      </div>

      {/* Loading Text */}
      <div className="text-center">
        <h2 className="text-2xl font-black text-white mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
            LOADING
          </span>
        </h2>
        
        {/* Animated Dots */}
        <div className="flex justify-center space-x-2 mb-6">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>

        {/* Motivational Text */}
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-red-400 font-semibold animate-pulse">
            Transform • Elevate • Dominate
          </p>
          <p className="text-gray-400 text-sm font-light">
            Preparing your transformation journey...
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64">
        <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse"></div>
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <span>0%</span>
          <span className="animate-pulse text-red-400">Loading...</span>
          <span>100%</span>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-red-500/20 rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
      <div className="absolute bottom-32 right-24 w-3 h-3 bg-red-400/30 rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '2.5s' }}></div>
      <div className="absolute top-1/3 right-16 w-2 h-2 bg-red-600/25 rounded-full animate-ping" style={{ animationDelay: '0.5s', animationDuration: '2s' }}></div>
      <div className="absolute bottom-1/4 left-12 w-5 h-5 bg-red-500/15 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
    </div>
  );
}