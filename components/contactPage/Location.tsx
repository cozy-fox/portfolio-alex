import MyInfo from "../MyInfo"
import {socialMedia,profile} from "./../../data";

export default function Location() {
  return (
    <div className="p-12">
      <iframe
        src={profile.addressOnMap}
        style={{ border: 0 } as React.CSSProperties}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-96"
      ></iframe>
      <ul className="grid grid-cols-1 mt-10 location sm:grid-cols-2 gap-y-2">
        <MyInfo field="address" value={profile.address} />
        <MyInfo field="email" value={socialMedia[0].mediaUrl.slice(7)} />
        <MyInfo field="phone" value={profile.phone} />
        <MyInfo field="job seeking" value="Yes" />
      </ul>
    </div>
  )
}
