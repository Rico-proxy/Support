import { useState } from "react"

import ResourceGrid from "@/components/ResourceGuide/ResourceGrid"
import ResourceHero from "@/components/ResourceGuide/ResourceHero"
import ResourceSupportCta from "@/components/ResourceGuide/ResourceSupportCta"
import { resources, type ResourceCategory } from "@/components/ResourceGuide/data"

const Resources = () => {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState<ResourceCategory>("All")

  const visibleResources = resources.filter((resource) => {
    const matchesCategory = category === "All" || resource.category === category
    const query = search.trim().toLowerCase()
    const matchesSearch = !query || `${resource.title} ${resource.description}`.toLowerCase().includes(query)

    return matchesCategory && matchesSearch
  })

  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <ResourceHero
        search={search}
        category={category}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
      />
      <ResourceGrid resources={visibleResources} />
      <ResourceSupportCta />
    </div>
  )
}

export default Resources
