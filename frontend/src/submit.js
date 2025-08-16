// submit.js

export const SubmitButton = () => {
    return (
        <div className="flex justify-center items-center">
            <button
                type="submit"
                className="
        px-8 py-3
        bg-gradient-to-br from-[#3b82f6] to-[#2563eb]
        hover:from-[#2563eb] hover:to-[#1d4ed8]
        text-white font-bold
        rounded-lg shadow-lg
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      "
            >
                Run Pipeline / Submit
            </button>
        </div>
    );
}
