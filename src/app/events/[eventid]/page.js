import EventId from "@/components/event/eventDetail";

export default function EventDetail({ params }){
  return(
    <EventId params={params}/>
  )
}

export async function generateStaticParams() {
  const posts = await fetch('/event-response.json').then((res) => res.json())
 
  return posts.items.map((post) => ({
    eventid: post.event_slug,
  }))
}