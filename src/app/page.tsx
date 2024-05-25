import { EducationExperienceComponent } from "@/components/home/EducationExperienceSection";
import { IntroSectionComponent } from "@/components/home/IntroSection";
import { ProjectsSectionComponent } from "@/components/home/ProjectsSection";
import { SkillsComponent } from "@/components/home/SkillsSection";
import { AppSpinner } from "@/components/etc/SpinnerComponent";

export default function Home() {
  return (
    <>
      <IntroSectionComponent />
      <ProjectsSectionComponent />
      <EducationExperienceComponent />
      <SkillsComponent />
      <AppSpinner />
    </>
  );
}
