import { useState } from "react"

export const Checkbox = ({className,margin}) => {
    const [isChecked,setIsChecked] = useState(false);

    return (
        <div className={`flex items-center gap-2 text-sm ${margin}`}>
            <span
              className={`p-2 rounded-full  flex ${
                isChecked ? 'bg-blue-200' : 'hover:bg-slate-200'
              } transition-all`}
            >
              <input
                type="checkbox"
                className={className}
                onChange={() => setIsChecked(!isChecked)}
              />
            </span>
            Show password
          </div>
    )
}