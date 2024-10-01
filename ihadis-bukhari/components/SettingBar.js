export default function SettingBar() {
    return (
        <div className="bg-white p-4 rounded-2xl  text-lg font-medium mb-4">
            <h2 className="text-2xl text-center p-2">সেটিংস</h2>
            <div className="p-2">
                <label>আরবি ফন্ট সিলেক্ট করুন</label>
                <select className="w-full bg-white outline-gray-100 p-2 rounded-lg">
                    <option>KFGQ</option>
                    <option>Me Quran</option>
                    <option>Al Mushaf</option>
                    <option>Amiri</option>
                    <option>Arial</option>
                </select>
            </div>
            <div className="p-2">
                <label>এরাবিক ফন্ট সাইজ</label>
                <div className="flex items-center gap-2">
                    <input
                        type="range"
                        className="w-full h-2 accent-primary rounded-lg  cursor-pointer"
                    />
                    ৫০
                </div>
            </div>
            <div className="p-2">
                <label>অনুবাদ ফন্ট সাইজ</label>
                <div className="flex items-center gap-2">
                    <input
                        type="range"
                        className="w-full h-2 accent-primary rounded-lg  cursor-pointer"
                    />
                    ৫০
                </div>
            </div>
            <div className="p-4 flex justify-between">
                <label>নাইট মোড</label>
                <div className="block relative bg-gray-200 w-12 h-6 p-1  rounded-full before:absolute before:bg-white before:shadow-md before:w-4 before:h-4  before:rounded-full before:transition-all before:duration-500 before:left-1 peer-checked:before:left-8 peer-checked:before:bg-white"></div>
            </div>
        </div>
    );
}
