project(steamworks)

cmake_minimum_required(VERSION 3.9)

add_definitions(-DBUILDING_NODE_EXTENSION -D_CRT_SECURE_NO_WARNINGS)

if(NODE_ARCH STREQUAL "x64")
  set(__X64__ TRUE)
else()
  set(__X64__ FALSE)
endif()

file(GLOB SOURCE_FILES "lib/*.cxx" "lib/*.cpp" "lib/*.h")
add_library(${PROJECT_NAME} SHARED ${SOURCE_FILES} ${CMAKE_JS_SRC})

set_target_properties(${PROJECT_NAME} PROPERTIES PREFIX "" SUFFIX ".node")

target_include_directories(${PROJECT_NAME} PRIVATE ${CMAKE_JS_INC} "lib" "steam")

if(WIN32)
  if(__X64__)
    file(
      GLOB LIB_FILES
      "steam/lib/win64/*.lib"
      "steam/redistributable_bin/win64/*.lib")
    file(
      GLOB BIN_FILES
      "steam/lib/win64/*.lib"
      "steam/redistributable_bin/win64/*.lib"
      "steam/lib/win64/*.dll"
      "steam/redistributable_bin/win64/*.dll")
  else()
    file(
      GLOB LIB_FILES
      "steam/lib/win32/*.lib"
      "steam/redistributable_bin/*.lib")
    file(
      GLOB BIN_FILES
      "steam/lib/win32/*.lib"
      "steam/redistributable_bin/*.lib"
      "steam/lib/win32/*.dll"
      "steam/redistributable_bin/*.dll")
  endif()
elseif(UNIX)
  if(__X64__)
    file(
      GLOB LIB_FILES
      "steam/lib/linux64/*.so"
      "steam/redistributable_bin/linux64/*.so")
    file(
      GLOB BIN_FILES
      "steam/lib/linux64/*.so"
      "steam/redistributable_bin/linux64/*.so")
  else()
    file(
      GLOB LIB_FILES
      "steam/lib/linux32/*.so"
      "steam/redistributable_bin/linux32/*.so")
    file(
      GLOB BIN_FILES
      "steam/lib/linux32/*.so"
      "steam/redistributable_bin/linux32/*.so")
  endif()
else()
  file(
    GLOB LIB_FILES
    "steam/lib/osx/*.dylib"
    "steam/redistributable_bin/osx/*.dylib")
endif()

if(MSVC)
  add_definitions("/wd4251" "/wd4275")
  set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} /std:c++17")
else()
  set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++17 -Wno-unused-result")
endif()

target_link_libraries(${PROJECT_NAME} ${CMAKE_JS_LIB} ${LIB_FILES})

add_custom_command(
  TARGET steamworks POST_BUILD
  COMMAND ${CMAKE_COMMAND} -E copy
          ${BIN_FILES}
          ${CMAKE_CURRENT_BINARY_DIR}/${CMAKE_BUILD_TYPE}
  COMMENT "Copying Steam binary files...")