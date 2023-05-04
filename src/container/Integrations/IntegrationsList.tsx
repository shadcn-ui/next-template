/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable @next/next/no-img-element */
import React from "react"
import Link from "next/link"

interface Props {
  imageSrc: string
  link: string
}

const IntegrationsListItem: React.FC<Props> = ({ imageSrc, link }) => {
  return (
    <Link
      href={link}
      className="flex items-center justify-center w-24 h-24 p-2 mx-auto transition-all bg-white hover:p-0"
    >
      <img src={imageSrc} alt="" />
    </Link>
  )
}

const items: Props[] = [
  { imageSrc: "/icons/Github-int.webp", link: "" },
  { imageSrc: "/icons/GitLab-int.webp", link: "" },
  { imageSrc: "/icons/Jira-int.webp", link: "" },
  { imageSrc: "/icons/Trello-int.webp", link: "" },
  { imageSrc: "/icons/Click-up-int.webp", link: "" },
  { imageSrc: "/icons/Notion-int.webp", link: "" },
  { imageSrc: "/icons/Asana-int.webp", link: "" },
  { imageSrc: "/icons/Linear-int.webp", link: "" },
  { imageSrc: "/icons/Teamwork-int.webp", link: "" },
  { imageSrc: "/icons/Monday.webp", link: "" },
  { imageSrc: "/icons/Azure-Devops-int.webp", link: "" },
  { imageSrc: "/icons/basecamp-int.webp", link: "" },
  { imageSrc: "/icons/Wrike-int.png", link: "" },
  { imageSrc: "/icons/Slack-int.png", link: "" },
  { imageSrc: "/icons/Drinft-int.webp", link: "" },
  { imageSrc: "/icons/Teams-int.webp", link: "" },
  { imageSrc: "/icons/Intercom-int.webp", link: "" },
  { imageSrc: "/icons/Wordpress-int.webp", link: "" },
  { imageSrc: "/icons/Shopify-int.webp", link: "" },
  { imageSrc: "/icons/Firefox-int.webp", link: "" },
  { imageSrc: "/icons/Chrome-int.webp", link: "" },
  { imageSrc: "/icons/Edge-int.webp", link: "" },
  { imageSrc: "/icons/Zapier-int.webp", link: "" },
  { imageSrc: "/icons/Zendesk-int.webp", link: "" },
  { imageSrc: "/icons/Webhooks-int.webp", link: "" },
]

const IntegrationsList = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-8 pb-32 lg:flex-row children:flex-1">
      <div className="flex items-center justify-center">
        <h3 className="max-w-[300px] font-medium text-[14px] lg:text-[20px]">
          Bring simplicity to your team. Sync your workflow and save time
          troubleshooting issues
        </h3>
      </div>
      <div className="grid self-stretch justify-between grid-cols-2 gap-4 sm:grid-cols-5">
        {items.map((item) => {
          return (
            <IntegrationsListItem imageSrc={item.imageSrc} link={item.link} />
          )
        })}
      </div>
    </div>
  )
}

export default IntegrationsList
