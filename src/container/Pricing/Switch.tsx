import { Variants, motion } from "framer-motion"

interface SwitchProps {
  isActive: boolean
  onToggle: () => void
  className?: string
}

const switchVariants: Variants = {
  active: {
    scaleX: [3, 1],
    x: [35, 35],
    transformOrigin: "right",
  },
  inactive: {
    scaleX: [3, 1],
    x: [0, 0],
    transformOrigin: "left",
  },
}

const Switch: React.FC<SwitchProps> = ({ isActive, onToggle, className }) => {
  const handleToggle = () => {
    onToggle()
  }

  return (
    <div
      onClick={handleToggle}
      className={className ? className : ""}
      style={{
        width: "70px",
        height: "30px",
        borderRadius: "25px",
        background: "#6042ec",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "5px",
        cursor: "pointer",
      }}
    >
      <motion.div
        initial="active"
        animate={isActive ? "active" : "inactive"}
        variants={switchVariants}
        transition={{ duration: 0.2, bounce: 0 }}
        style={{
          width: "25px",
          height: "25px",
          borderRadius: "50%",
          background: "#fff",
        }}
      />
    </div>
  )
}

export default Switch
