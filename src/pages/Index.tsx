import HeroSection from "@/components/travel/HeroSection";
import DayNavigation from "@/components/travel/DayNavigation";
import DayCard from "@/components/travel/DayCard";
import ActivityItem from "@/components/travel/ActivityItem";
import TipBox from "@/components/travel/TipBox";
import ChecklistSection from "@/components/travel/ChecklistSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <DayNavigation />

      <main className="mx-auto max-w-2xl space-y-8 px-4 py-8 md:px-6">
        {/* Day 1 */}
        <DayCard
          dayNumber={1}
          date="2月17日"
          title="漫步云端，初见渝州"
          hotel="重庆康莱德酒店"
          hotelNote="南岸区 · 高层江景"
          emoji="🌆"
        >
          <ActivityItem
            index={0}
            time="下午"
            title="抵达重庆北站"
            icon="🚄"
            description="建议打车前往南岸区康莱德酒店。"
            details={[
              "酒店位于高层，可先在房间俯瞰长江与嘉陵江交汇。"
            ]}
          />
          <ActivityItem
            index={1}
            time="傍晚"
            title="龙门浩老街"
            icon="🏮"
            description="重庆开埠时期的青砖建筑，坡道平缓有扶梯。"
            details={[
              "5A级视野——观赏对岸渝中区高楼林立夜景的最佳机位",
              "酒店打车约5-10分钟"
            ]}
          />
          <ActivityItem
            index={2}
            time="晚餐"
            title="下浩里私房菜"
            icon="🍽️"
            description="推荐在老街内找一家看江的餐馆，环境清幽，适合老人。"
          />
          <TipBox
            title="📌 暖心叮嘱"
            variant="warm"
            tips={[
              { icon: "🧣", text: "保暖：2月江边风大，请务必给父母准备帽子和围巾。" },
              { icon: "🚕", text: "办卡：父母如果手机操作不便，在康莱德礼宾部可以咨询是否能代叫车。" },
            ]}
          />
        </DayCard>

        {/* Day 2 */}
        <DayCard
          dayNumber={2}
          date="2月18日"
          title="跨越江水，心安母城"
          hotel="重庆山来江往酒店"
          hotelNote="解放碑店"
          emoji="🌉"
        >
          <ActivityItem
            index={0}
            time="上午"
            title="南滨路漫步"
            icon="🌅"
            description="早餐后在南滨路漫步，看阳光洒在江面上。"
          />
          <ActivityItem
            index={1}
            time="中午"
            title="换宿解放碑"
            icon="🏨"
            description="从南岸打车跨过东水门大桥，入住山来江往酒店。"
          />
          <ActivityItem
            index={2}
            time="下午"
            title="解放碑 · 魁星楼"
            icon="🏛️"
            description="步行打卡重庆地标。"
            details={[
              "解放碑：重庆的精神地标",
              "魁星楼：体验「消失的地平线」，感受魔幻立体地形"
            ]}
          />
          <ActivityItem
            index={3}
            time="晚上"
            title="戴家巷 · 平视洪崖洞"
            icon="✨"
            description="无需下到底部，在戴家巷崖壁步道的观景台，舒舒服服看洪崖洞金碧辉煌的灯火。"
          />
          <TipBox
            title="📌 预约提醒"
            variant="sky"
            tips={[
              { icon: "🚡", text: "长江索道：请在今天通过微信小程序「重庆索道公司」预约明天的索道票（建议选明早9点-11点时段）。" },
            ]}
          />
        </DayCard>

        {/* Day 3 */}
        <DayCard
          dayNumber={3}
          date="2月19日"
          title="穿越民国，文化寻根"
          hotel="重庆山来江往酒店"
          hotelNote="解放碑店"
          emoji="📜"
        >
          <ActivityItem
            index={0}
            time="上午"
            title="李子坝轻轨穿楼"
            icon="🚝"
            description="乘坐2号线或打车前往，在观景台看轻轨从楼房中穿过。"
          />
          <ActivityItem
            index={1}
            time="中午"
            title="鹅岭二厂"
            icon="📸"
            description="复古的工业风背景，很适合拍照。"
            details={[
              "⚠️ 请务必直接打车到二厂大门口，避免父母爬坡"
            ]}
          />
          <ActivityItem
            index={2}
            time="下午"
            title="中山四路"
            icon="🌳"
            description="周公馆、桂园等历史遗址，街道宁静且树木苍翠。"
          />
          <ActivityItem
            index={3}
            time="晚上"
            title="长江索道 · 空中体验"
            icon="🚡"
            description="持预约号乘坐索道。这是老重庆人的「公交车」，在几百米高空滑过长江。"
          />
          <TipBox
            title="📌 暖心叮嘱"
            variant="jade"
            tips={[
              { icon: "🥗", text: "饮食：如果父母吃不惯红油火锅，这天晚上可以尝试「粤菜」或者「汤锅」，缓解前两天的饮食油腻。" },
              { icon: "🪪", text: "身份证：进入周公馆等遗址需要刷身份证。" },
            ]}
          />
        </DayCard>

        {/* Day 4 */}
        <DayCard
          dayNumber={4}
          date="2月20日"
          title="古镇慢活，满载而归"
          hotel="重庆山来江往酒店"
          hotelNote="解放碑店"
          emoji="🎁"
        >
          <ActivityItem
            index={0}
            time="上午"
            title="磁器口后街"
            icon="🏘️"
            description="避开人挤人的正街，走宽敞的「后街」。"
            details={[
              "打车前往磁器口",
              "看非遗展示，买些麻花和茶叶作为伴手礼"
            ]}
          />
          <ActivityItem
            index={1}
            time="下午"
            title="湖广会馆"
            icon="🏯"
            description="独特的明黄色墙体建筑，非常有历史文化气息。"
          />
          <ActivityItem
            index={2}
            time="晚上"
            title="自由活动 · 解放碑商圈"
            icon="🛍️"
            description="最后一天在酒店附近选购一些重庆特产。"
            details={[
              "推荐：江津米花糖、老四川牛肉干"
            ]}
          />
          <ChecklistSection />
        </DayCard>

        {/* Footer */}
        <footer className="pb-12 pt-4 text-center">
          <p className="font-serif text-lg text-muted-foreground">
            祝爸妈旅途愉快 ❤️
          </p>
          <p className="mt-1 font-sans text-sm text-muted-foreground/60">
            一路平安，玩得开心
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
