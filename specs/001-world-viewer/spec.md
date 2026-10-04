# Feature Specification: World Viewer — linked timeline and map

**Feature Branch**: `001-world-viewer`

**Created**: 2026-10-04

**Status**: Clarified

**Input**: User description: "I like the idea of combining A and B. I don't see the room for hyperlinks, so take the Russian stuff and add it as an example. For the map view there should be the idea of 'zooming' the map for sets of big world events in the timeline."

## Clarifications

### Session 2026-10-04

Amit was away while this ran; answers marked *(default)* were chosen by Herschel from earlier conversation and are open for review.

- Q: Which mockup elements carry forward? → A: Mockup A's swimlanes, reign bars, books lane, family lane and "meanwhile" panel, plus mockup B's map and slider. Mockup C (scroll story) is not part of this feature.
- Q: What should a hyperlink open? → A: Three kinds. Vault notes open in Obsidian at the relevant section. Background reading opens Wikipedia. Books open in Calibre when owned, otherwise an Ottawa Public Library search. *(default for the library choice)*
- Q: What is a "set of big world events"? → A: A **chapter**: a named date range with a map region (for example "Barbarossa to Stalingrad", 1941–43, western USSR). Chapters appear as a band above the lanes. Selecting one zooms both the timeline and the map; during playback the map follows the active chapter. *(default: the most specific chapter wins when chapters overlap)*
- Q: How should the Russia material show territory when no historical border data exists? → A: As event pins and chapter zooms only, with no country colouring, and a note on screen saying so. *(default)*
- Q: Should a moment be shareable as a link (for example from an Obsidian note)? → A: Yes. The address carries the dataset, date and selected event. *(default)*

## User Scenarios & Testing *(mandatory)*

### User Story 1 - See a moment everywhere at once (Priority: P1)

Amit opens the viewer and sees a map above a set of swimlanes. As he moves along the timeline, a cursor marks the date. The side panel lists what was happening in every lane near that date and who was in power. The map shows the state of the world on that date and pins the nearby events.

**Why this priority**: This is the reason for the project. Without it there is nothing to link or zoom.

**Independent Test**: Open the viewer, move the cursor to 19 August 1942, and confirm that the panel lists Dieppe, Stalingrad and Guadalcanal, shows Churchill, Roosevelt, King and Stalin in power, and pins Dieppe on the map.

**Acceptance Scenarios**:

1. **Given** the WW2 dataset is open, **When** Amit hovers over the timeline at a date, **Then** the panel lists the events within the visible window around that date, grouped by lane with Canada first, plus the leaders in power.
2. **Given** a date is selected, **When** the map has control states for that dataset, **Then** countries are coloured by the most recent state at or before that date, and a legend explains the colours.
3. **Given** the timeline is zoomed in, **When** Amit drags or uses the wheel, **Then** the timeline pans or zooms and labels re-flow without overlapping.
4. **Given** Amit presses Play, **When** time advances, **Then** the cursor, map and panel move together, and Pause stops them.

---

### User Story 2 - Zoom the map to a chapter (Priority: P2)

Above the lanes, a band shows chapters such as "Battle of Britain", "Barbarossa to Stalingrad" and "Crossing Siberia". Clicking one zooms the timeline to its dates and flies the map to its region. With "follow chapters" on, playing through time moves the map from one chapter's region to the next.

**Why this priority**: Amit asked for it by name. A world-scale map is too small to show Leningrad, Kursk or Ortona.

**Independent Test**: Click the "Barbarossa to Stalingrad" chapter and confirm that the map zooms to the western USSR and the timeline shows mid-1941 to early 1943.

**Acceptance Scenarios**:

1. **Given** a chapter is visible, **When** Amit clicks it, **Then** the map animates to the chapter's region and the timeline zooms to its date range.
2. **Given** "follow chapters" is on, **When** the cursor enters a chapter's range during playback, **Then** the map flies to that chapter; where chapters overlap, the shortest one wins.
3. **Given** the map is zoomed, **When** Amit presses "World", **Then** the map returns to the whole-world view.
4. **Given** an event is selected, **When** it has coordinates, **Then** the map pans to it and marks it.

---

### User Story 3 - Follow a link out (Priority: P3)

Selecting an event, ruler, chapter or book opens a detail card with links: the section of the vault note in Obsidian, a Wikipedia article for background, and for books either Calibre (if owned) or a library search.

**Why this priority**: Amit noticed the mockups had no room for links. The viewer is meant to lead back into reading.

**Independent Test**: Select "Peter the Great" in the Russia dataset and confirm the card offers an Obsidian link to the "Peter the Great (r. 1682–1725)" section of the Russia note, a Wikipedia link, and the three books for that era with library links.

**Acceptance Scenarios**:

1. **Given** an item with a vault section, **When** its card opens, **Then** an "Open note" link uses the Obsidian address of that note and heading.
2. **Given** a book owned in Calibre, **When** its card opens, **Then** the link opens it in Calibre; otherwise the link searches the Ottawa Public Library.
3. **Given** any link, **Then** it is a real, well-formed address (tested), and external links open in a new tab.

---

### User Story 4 - Switch periods and share a moment (Priority: P4)

A selector switches between datasets (Russia 1450–1946 and WW2 1937–1945). The address bar records the dataset, date and selected event, so a link pasted into an Obsidian note reopens the same moment.

**Why this priority**: Russia is the hyperlink example Amit asked for, and later entries (the Indian Ocean, Tamralipta to Java and China) will need the same switch.

**Independent Test**: Open `index.html#russia/1812-09-14`, confirm that the Russia dataset loads with the cursor on 14 September 1812, then switch to WW2 and confirm the address updates.

**Acceptance Scenarios**:

1. **Given** an address with a dataset and date, **When** the page loads, **Then** that dataset and date are shown.
2. **Given** Amit switches dataset, **Then** lanes, leaders, books, chapters and map reset to the new dataset and the address updates.
3. **Given** an unknown dataset or bad date in the address, **Then** the viewer falls back to the default dataset and the start of its range without errors.

---

### User Story 5 - My family on the timeline (Priority: P5)

A family lane shows lifetimes Amit enters himself. The panel shows each person's age at the cursor date, or how many years until they were born.

**Why this priority**: It makes distance in time personal, but the viewer is useful without it.

**Independent Test**: Enter a birth year for "Amit", reload, and confirm the bar and the age in the panel persist and nothing is written to the repository.

**Acceptance Scenarios**:

1. **Given** no birth year is stored, **Then** the lane shows "add birth year".
2. **Given** a birth year is entered, **Then** it is stored in the browser only and shown as a bar and as an age in the panel.

### Edge Cases

- A dataset with no map states (Russia) shows pins and chapters but no colouring, and says why.
- Events with no coordinates still appear in lanes and the panel, but are not pinned.
- Overlapping chapters: the shortest active chapter is followed.
- Very long spans (Battle of the Atlantic) must not hide the labels of shorter events in the same lane.
- Dates before 1582 are shown as recorded (Julian dates are not converted), and Russian dates are given in the modern (Gregorian) calendar where the sources differ; the data notes which.
- Narrow windows (under 1000 px wide) stack the panel below the map rather than hiding it.
- Hash with a selected event id that does not exist: ignore the event, keep the date.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The viewer MUST show a map, a chapter band, swimlanes (Canada pinned first), a leaders section, a books lane and a family lane, all sharing one time cursor.
- **FR-002**: The side panel MUST list events near the cursor for every lane, the leaders in power, and family ages.
- **FR-003**: The map MUST colour countries by control state where the dataset provides states, with a legend and an on-screen note about simplifications.
- **FR-004**: The map MUST pin events with coordinates that fall near the cursor date and highlight the selected event.
- **FR-005**: Chapters MUST be shown as a band; selecting one MUST zoom the timeline to its range and the map to its region.
- **FR-006**: A "follow chapters" option MUST make the map fly to the active chapter during playback and scrubbing.
- **FR-007**: The map MUST support manual zoom and pan and a "World" reset.
- **FR-008**: Selecting an event, leader, chapter or book MUST open a detail card with all available links (vault section, Wikipedia, Calibre or library).
- **FR-009**: The viewer MUST support at least two datasets and a selector to switch between them.
- **FR-010**: The address MUST encode dataset, date and selected item, and loading such an address MUST restore them.
- **FR-011**: Play/Pause MUST animate the cursor through the dataset's range.
- **FR-012**: A search box MUST filter events by text and let Amit jump to a match.
- **FR-013**: Keyboard: left/right arrows MUST step to the previous/next event; Escape MUST clear the selection.
- **FR-014**: Family birth and death years MUST be stored only in the browser.
- **FR-015**: Approximate dates MUST be marked as approximate in the card and panel.
- **FR-016**: The viewer MUST work from `file://` with no network.
- **FR-017**: The Russia dataset MUST cover 1450–1946 with rulers, events in Russia, Europe, Asia and Canada & the Americas, the books from the vault note, and links to the note's sections.

### Key Entities

- **Dataset**: a period of history with a title, date range, lanes, events, leaders, books, chapters, optional map states, and an optional vault note.
- **Lane**: a region or theatre (Canada first).
- **Event**: a dated point or span in one lane, with optional coordinates, description, vault section, Wikipedia topic and approximate flag.
- **Leader**: a person with life dates and one or more terms in power, a side or country, and links.
- **Chapter**: a named date range with a map region, used for zooming.
- **Book**: a title and author covering a date range, owned or not, with links.
- **Map state**: the control status of countries from a given date.
- **Family member**: a label with birth and death years kept only in the browser.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: From opening the viewer, Amit can answer "what else was happening when X happened?" for any event in under 10 seconds.
- **SC-002**: Selecting a chapter brings the map to its region in under 1.5 seconds.
- **SC-003**: Every link in both datasets is well-formed (100% pass in the data tests).
- **SC-004**: Both datasets pass validation: every event has a valid date inside the range, a known lane, and coordinates in range if present.
- **SC-005**: The viewer opens and is interactive from `file://` in under 2 seconds on Amit's PC.
- **SC-006**: All automated browser tests for the five user stories pass.

## Assumptions

- The reader is Amit on a desktop browser, with the iPad as a later target.
- Modern borders are acceptable for WW2 colouring if labelled; historical borders are a later feature.
- Obsidian links use the vault name "Fourth Vault July 2023".
- The Ottawa Public Library search is an acceptable stand-in for buying links.
- Wikipedia links use the site's search-and-go address so a slightly wrong title still lands on the right article.
