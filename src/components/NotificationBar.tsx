import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

const NotificationBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="sticky top-0 z-50 bg-gradient-festive text-primary-foreground py-2 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">
            🌟 Ready for festive bliss? Start your G.L.R journey!
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            variant="gold" 
            size="sm"
            className="text-xs font-semibold"
          >
            Shop Now
          </Button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-primary-foreground hover:text-pattu-gold transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationBar;