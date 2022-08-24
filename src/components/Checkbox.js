export const Checkbox = ({className,margin,onChange,isChecked }) => {
    

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
                onChange={onChange}
              />
            </span>
            Show password
          </div>
    )
}