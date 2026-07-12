import KnowledgeDesktop from "./KnowledgeDesktop"
import KnowledgeMobile from "./KnowledgeMobile"

const KnowledgeSection = () => (
  <>
    <div className="md:hidden">
      <KnowledgeMobile />
    </div>
    <div className="hidden md:block">
      <KnowledgeDesktop />
    </div>
  </>
)

export default KnowledgeSection
