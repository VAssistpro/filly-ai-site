import { useId } from "react";
import { cn } from "@/lib/utils";

type NeuToggleProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
};

/**
 * Tactile neumorphic toggle.
 * Track = deeply recessed pill (inset shadows + rim highlight).
 * Knob  = raised puck (outer soft shadow + top light, bottom occlusion).
 */
export function NeuToggle({
  checked,
  onCheckedChange,
  label,
  disabled,
  className,
}: NeuToggleProps) {
  const id = useId();

  return (
    <button
      id={id}
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onCheckedChange(!checked)}
      className={cn("neu-switch", checked && "is-on", className)}
    >
      <span className="neu-switch-well" aria-hidden="true">
        <span className="neu-switch-labels" aria-hidden="true">
          <span className="neu-switch-label neu-switch-label-off">OFF</span>
          <span className="neu-switch-label neu-switch-label-on">ON</span>
        </span>
        <span className="neu-switch-knob" />
      </span>
    </button>
  );
}


