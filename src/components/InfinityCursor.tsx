import { useEffect, useState } from 'react';

const InfinityCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'A' || 
                           target.tagName === 'BUTTON' || 
                           target.closest('a') !== null || 
                           target.closest('button') !== null ||
                           target.style.cursor === 'pointer';
      setIsHovering(isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsClicking(false);
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Circle */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div
          style={{
            width: isHovering ? '40px' : isClicking ? '30px' : '35px',
            height: isHovering ? '40px' : isClicking ? '30px' : '35px',
            borderRadius: '50%',
            border: '2px solid rgba(168, 85, 247, 0.5)',
            transition: 'all 0.2s ease-out',
          }}
        />
      </div>

      {/* Inner Dot */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'none',
        }}
      >
        <div
          style={{
            width: isClicking ? '4px' : '6px',
            height: isClicking ? '4px' : '6px',
            borderRadius: '50%',
            background: '#a855f7',
            transition: 'all 0.15s ease-out',
          }}
        />
      </div>
    </>
  );
};

export default InfinityCursor;
