"use client";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { TimelineContent } from "@/src/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/src/components/ui/vertical-cut-reveal";
import { cn } from "@/src/lib/utils";
import NumberFlow from "@number-flow/react";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import GradientButton from "@/src/components/ui/button-1";

const plans = [
  {
    name: "Starter",
    description:
      "Idéal pour les petites entreprises et les startups qui débutent.",
    price: 12,
    yearlyPrice: 99,
    buttonText: "Commencer",
    buttonVariant: "outline" as const,
    includes: [
      "Inclus gratuitement :",
      "Cartes illimitées",
      "Fonds personnalisés",
      "Auth à 2 facteurs",
      "Support standard",
    ],
  },
  {
    name: "Business",
    description:
      "Le meilleur rapport qualité-prix pour les entreprises en croissance.",
    price: 48,
    yearlyPrice: 399,
    buttonText: "Commencer",
    buttonVariant: "default" as const,
    popular: true,
    includes: [
      "Tout ce qui est dans Starter, plus :",
      "Checklists avancées",
      "Champs personnalisés",
      "Fonctions sans serveur",
      "Support prioritaire",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Sécurité renforcée et accès illimité pour les grandes équipes.",
    price: 96,
    yearlyPrice: 899,
    buttonText: "Commencer",
    buttonVariant: "outline" as const,
    includes: [
      "Tout ce qui est dans Business, plus :",
      "Gestion multi-tableaux",
      "Invités multi-tableaux",
      "Permissions de pièces jointes",
      "Onboarding dédié",
    ],
  },
];

const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-10 mx-auto flex w-fit rounded-full bg-neutral-900 border border-gray-700 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "0" ? "text-white" : "text-gray-200",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full border-4 shadow-sm shadow-blue-600 border-blue-600 bg-gradient-to-t from-blue-500 to-blue-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Mensuel</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "1" ? "text-white" : "text-gray-200",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full border-4 shadow-sm shadow-blue-600 border-blue-600 bg-gradient-to-t from-blue-500 to-blue-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">Annuel</span>
        </button>
      </div>
    </div>
  );
};

export default function PricingSection4() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <div
      className="py-20 md:py-32 mx-auto relative overflow-x-hidden"
      ref={pricingRef}
    >
      <article className="text-center mb-6 pt-12 max-w-3xl mx-auto space-y-2 relative z-50">
        <h2 className="text-4xl md:text-6xl font-handwritten text-secondary drop-shadow-[0_0_10px_rgba(0,204,255,0.5)]">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center "
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0, // First element
            }}
          >
            Les plans qui vous conviennent le mieux
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="text-gray-300"
        >
          Utilisé par des millions, nous aidons les équipes du monde entier.
          Découvrez quelle option vous convient.
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <PricingSwitch onSwitch={togglePricingPeriod} />
        </TimelineContent>
      </article>

      <div className="grid md:grid-cols-3 max-w-5xl gap-8 py-12 mx-auto px-4 relative z-10">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={2 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={`relative text-white border-neutral-800 ${
                plan.popular
                  ? "bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 shadow-[0px_-13px_300px_0px_#0900ff] z-20"
                  : "bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 z-10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-6 py-1.5 rounded-full shadow-[0_0_20px_rgba(0,102,255,0.5)] z-30">
                  Plus Populaire
                </div>
              )}
              <CardHeader className="text-left ">
                <div className="flex justify-between">
                  <h3 className="text-3xl mb-2">{plan.name}</h3>
                </div>
                <div className="flex items-baseline">
                  <span className="text-4xl font-semibold ">
                    $
                    <NumberFlow
                      format={{
                        currency: "USD",
                      }}
                      value={isYearly ? plan.yearlyPrice : plan.price}
                      className="text-4xl font-semibold"
                    />
                  </span>
                  <span className="text-gray-300 ml-1">
                    /{isYearly ? "an" : "mois"}
                  </span>
                </div>
                <p className="text-sm text-gray-300 mb-4">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <GradientButton 
                  className="mb-6" 
                  height="60px"
                >
                  {plan.buttonText}
                </GradientButton>

                <div className="space-y-3 pt-4 border-t border-neutral-700">
                  <h4 className="font-medium text-base mb-3">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-2">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <span className="h-2.5 w-2.5 bg-neutral-500 rounded-full grid place-content-center"></span>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </div>
  );
}
