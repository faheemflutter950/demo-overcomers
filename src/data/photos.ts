import belongGroups from "@/assets/photos/belong-groups.jpg.asset.json";
import businessBarber from "@/assets/photos/business-barber.jpg.asset.json";
import choirLine from "@/assets/photos/choir-line.jpg.asset.json";
import communityGiveaway from "@/assets/photos/community-giveaway.jpg.asset.json";
import congregation from "@/assets/photos/congregation.jpg.asset.json";
import families from "@/assets/photos/families.jpg.asset.json";
import fellowshipMeal from "@/assets/photos/fellowship-meal.jpg.asset.json";
import heroWorship from "@/assets/photos/hero-worship.jpg.asset.json";
import lobbyCrowd from "@/assets/photos/lobby-crowd.jpg.asset.json";
import lobbyWelcome from "@/assets/photos/lobby-welcome.jpg.asset.json";
import mensGathering from "@/assets/photos/mens-gathering.jpg.asset.json";
import outreachServe from "@/assets/photos/outreach-serve.jpg.asset.json";
import pastorAndy from "@/assets/photos/pastor-andy.jpg.asset.json";
import praiseTeam from "@/assets/photos/praise-team.jpg.asset.json";
import prayerHands from "@/assets/photos/prayer-hands.jpg.asset.json";
import sermonChoir from "@/assets/photos/sermon-choir.jpg.asset.json";
import sermonVictory from "@/assets/photos/sermon-victory.jpg.asset.json";
import sermonWorshipNight from "@/assets/photos/sermon-worship-night.jpg.asset.json";
import watchOnline from "@/assets/photos/watch-online.jpg.asset.json";
import welcomeTeam from "@/assets/photos/welcome-team.jpg.asset.json";

/** Real World Overcomers photography, served from the CDN. */
export const photos = {
  heroWorship: heroWorship.url,
  congregation: congregation.url,
  prayerHands: prayerHands.url,
  praiseTeam: praiseTeam.url,
  choirLine: choirLine.url,
  lobbyWelcome: lobbyWelcome.url,
  lobbyCrowd: lobbyCrowd.url,
  welcomeTeam: welcomeTeam.url,
  families: families.url,
  fellowshipMeal: fellowshipMeal.url,
  belongGroups: belongGroups.url,
  mensGathering: mensGathering.url,
  outreachServe: outreachServe.url,
  communityGiveaway: communityGiveaway.url,
  businessBarber: businessBarber.url,
  watchOnline: watchOnline.url,
  pastorAndy: pastorAndy.url,
  sermonVictory: sermonVictory.url,
  sermonWorshipNight: sermonWorshipNight.url,
  sermonChoir: sermonChoir.url,
} as const;
