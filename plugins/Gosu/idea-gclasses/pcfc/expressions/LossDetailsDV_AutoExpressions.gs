package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/lossdetails/LossDetailsDV.Auto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LossDetailsDV_AutoExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/lossdetails/LossDetailsDV.Auto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LossDetailsDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=otherID_Cell) at LossDetailsDV.Auto.pcf: line 252, column 31
    function action_124 () : void {
      pcf.ClaimForward.go(otherClaim.Claim)
    }
    
    // 'action' attribute on TextCell (id=otherClaimant_Cell) at LossDetailsDV.Auto.pcf: line 272, column 61
    function action_138 () : void {
      UserContactDetailPopup.push(otherClaim.Claim.AssignedUser)
    }
    
    // 'action' attribute on TextCell (id=otherID_Cell) at LossDetailsDV.Auto.pcf: line 252, column 31
    function action_dest_125 () : pcf.api.Destination {
      return pcf.ClaimForward.createDestination(otherClaim.Claim)
    }
    
    // 'action' attribute on TextCell (id=otherClaimant_Cell) at LossDetailsDV.Auto.pcf: line 272, column 61
    function action_dest_139 () : pcf.api.Destination {
      return pcf.UserContactDetailPopup.createDestination(otherClaim.Claim.AssignedUser)
    }
    
    // 'highlighted' attribute on Row at LossDetailsDV.Auto.pcf: line 241, column 59
    function highlighted_143 () : java.lang.Boolean {
      return otherClaim.State != TC_CLOSED
    }
    
    // 'value' attribute on TypeKeyCell (id=otherStatus_Cell) at LossDetailsDV.Auto.pcf: line 246, column 49
    function valueRoot_122 () : java.lang.Object {
      return otherClaim
    }
    
    // 'value' attribute on TypeKeyCell (id=otherStatus_Cell) at LossDetailsDV.Auto.pcf: line 246, column 49
    function value_121 () : typekey.ClaimState {
      return otherClaim.State
    }
    
    // 'value' attribute on TextCell (id=otherID_Cell) at LossDetailsDV.Auto.pcf: line 252, column 31
    function value_126 () : java.lang.String {
      return otherClaim.ClaimNumber
    }
    
    // 'value' attribute on DateCell (id=otherLossDate_Cell) at LossDetailsDV.Auto.pcf: line 257, column 46
    function value_129 () : java.util.Date {
      return otherClaim.LossDate
    }
    
    // 'value' attribute on TextCell (id=otherInsured_Cell) at LossDetailsDV.Auto.pcf: line 261, column 49
    function value_132 () : java.lang.String {
      return otherClaim.Description
    }
    
    // 'value' attribute on DateCell (id=otherPolicyID_Cell) at LossDetailsDV.Auto.pcf: line 266, column 50
    function value_135 () : java.util.Date {
      return otherClaim.ReportedDate
    }
    
    // 'value' attribute on TextCell (id=otherClaimant_Cell) at LossDetailsDV.Auto.pcf: line 272, column 61
    function value_140 () : java.lang.String {
      return otherClaim.AssignedUserDisplayName
    }
    
    property get otherClaim () : entity.PriorClaimView {
      return getIteratedValue(1) as entity.PriorClaimView
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/lossdetails/LossDetailsDV.Auto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LossDetailsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_60 () : void {
      AddressBookPickerPopup.push(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_62 () : void {
      if (Claim.reporter != null) { ClaimContactDetailPopup.push(Claim.reporter, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_63 () : void {
      ClaimContactDetailPopup.push(Claim.reporter, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_84 () : void {
      AddressBookPickerPopup.push(statictypeof (Claim.maincontact), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_86 () : void {
      if (Claim.maincontact != null) { ClaimContactDetailPopup.push(Claim.maincontact, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_87 () : void {
      ClaimContactDetailPopup.push(Claim.maincontact, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_61 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_64 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.reporter, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_85 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Claim.maincontact), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_88 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.maincontact, Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Auto.pcf: line 173, column 27
    function def_onEnter_109 (def :  pcf.EditableVehicleIncidentsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ListViewInput (id=Claim_Properties) at LossDetailsDV.Auto.pcf: line 187, column 27
    function def_onEnter_111 (def :  pcf.EditableFixedPropertyIncidentsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Auto.pcf: line 200, column 27
    function def_onEnter_113 (def :  pcf.EditableInjuryIncidentsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Auto.pcf: line 283, column 27
    function def_onEnter_146 (def :  pcf.EditableWitnessesLV) : void {
      def.onEnter(Claim.getClaimContactRolesByRole(TC_WITNESS), Claim, TC_WITNESS)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Auto.pcf: line 293, column 27
    function def_onEnter_148 (def :  pcf.EditableContributingFactorsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on InputSetRef at LossDetailsDV.Auto.pcf: line 92, column 54
    function def_onEnter_46 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(Claim.AddressOwner)
    }
    
    // 'def' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_57 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Claim.reporter), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_81 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Claim.maincontact), null, Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Auto.pcf: line 173, column 27
    function def_refreshVariables_110 (def :  pcf.EditableVehicleIncidentsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on ListViewInput (id=Claim_Properties) at LossDetailsDV.Auto.pcf: line 187, column 27
    function def_refreshVariables_112 (def :  pcf.EditableFixedPropertyIncidentsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Auto.pcf: line 200, column 27
    function def_refreshVariables_114 (def :  pcf.EditableInjuryIncidentsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Auto.pcf: line 283, column 27
    function def_refreshVariables_147 (def :  pcf.EditableWitnessesLV) : void {
      def.refreshVariables(Claim.getClaimContactRolesByRole(TC_WITNESS), Claim, TC_WITNESS)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Auto.pcf: line 293, column 27
    function def_refreshVariables_149 (def :  pcf.EditableContributingFactorsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on InputSetRef at LossDetailsDV.Auto.pcf: line 92, column 54
    function def_refreshVariables_47 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(Claim.AddressOwner)
    }
    
    // 'def' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_58 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Claim.reporter), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_82 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Claim.maincontact), null, Claim)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LossDetailsDV.Auto.pcf: line 21, column 35
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at LossDetailsDV.Auto.pcf: line 37, column 41
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.FaultRating = (__VALUE_TO_SET as typekey.FaultRating)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_MainContactType_Input) at LossDetailsDV.Auto.pcf: line 147, column 48
    function defaultSetter_102 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.MainContactType = (__VALUE_TO_SET as typekey.PersonRelationType)
    }
    
    // 'value' attribute on DateInput (id=Notification_DateReportedToAgent_Input) at LossDetailsDV.Auto.pcf: line 164, column 40
    function defaultSetter_106 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.DateRptdToAgent = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=Notification_AtFaultPercentage_Input) at LossDetailsDV.Auto.pcf: line 48, column 25
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Fault = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Auto.pcf: line 56, column 41
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Catastrophe = (__VALUE_TO_SET as entity.Catastrophe)
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Ext_Input) at LossDetailsDV.Auto.pcf: line 64, column 41
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ISOCatastrophe_Ext = (__VALUE_TO_SET as entity.Catastrophe)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_Weather_Input) at LossDetailsDV.Auto.pcf: line 70, column 42
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Weather = (__VALUE_TO_SET as typekey.WeatherType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claim_EmploymentCourse_Input) at LossDetailsDV.Auto.pcf: line 75, column 41
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmploymentInjury = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=LossDate_Input) at LossDetailsDV.Auto.pcf: line 84, column 32
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LossDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Notification_FirstNoticeSuit_Input) at LossDetailsDV.Auto.pcf: line 100, column 40
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.FirstNoticeSuit = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_HowReported_Input) at LossDetailsDV.Auto.pcf: line 106, column 46
    function defaultSetter_53 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.HowReported = (__VALUE_TO_SET as typekey.HowReportedType)
    }
    
    // 'value' attribute on TypeKeyInput (id=LossCause_Input) at LossDetailsDV.Auto.pcf: line 28, column 39
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LossCause = (__VALUE_TO_SET as typekey.LossCause)
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_67 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.reporter = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_ReportedByType_Input) at LossDetailsDV.Auto.pcf: line 122, column 48
    function defaultSetter_77 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ReportedByType = (__VALUE_TO_SET as typekey.PersonRelationType)
    }
    
    // 'value' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_91 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.maincontact = (__VALUE_TO_SET as entity.Person)
    }
    
    // 'onChange' attribute on PostOnChange at LossDetailsDV.Auto.pcf: line 86, column 74
    function onChange_39 () : void {
      gw.pcf.ClaimLossDetailsUtil.changedLossDate(Claim)
    }
    
    // 'onChange' attribute on PostOnChange at LossDetailsDV.Auto.pcf: line 30, column 101
    function onChange_4 () : void {
      ext.config.claim.LossDetailsHelper_Ext.DefaultClaimFaultAndFaultRating(Claim)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_65 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Claim.reporter); var result = eval("Claim.reporter = Claim.resolveContact(Claim.reporter) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_89 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Claim.maincontact); var result = eval("Claim.maincontact = Claim.resolveContact(Claim.maincontact) as " + contactType.Name + ";return null;"); ;
    }
    
    // Reflect at LossDetailsDV.Auto.pcf: line 149, column 43
    function reflectionValue_100 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return (VALUE==Claim.Insured) ? ("self") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // Reflect at LossDetailsDV.Auto.pcf: line 124, column 42
    function reflectionValue_75 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (VALUE==Claim.Insured) ? ("self") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'sortBy' attribute on IteratorSort at LossDetailsDV.Auto.pcf: line 239, column 30
    function sortBy_116 (otherClaim :  entity.PriorClaimView) : java.lang.Object {
      return otherClaim.LossDate
    }
    
    // 'value' attribute on TypeKeyCell (id=otherStatus_Cell) at LossDetailsDV.Auto.pcf: line 246, column 49
    function sortValue_117 (otherClaim :  entity.PriorClaimView) : java.lang.Object {
      return otherClaim.State
    }
    
    // 'value' attribute on TextCell (id=otherID_Cell) at LossDetailsDV.Auto.pcf: line 252, column 31
    function sortValue_118 (otherClaim :  entity.PriorClaimView) : java.lang.Object {
      return otherClaim.ClaimNumber
    }
    
    // 'value' attribute on DateCell (id=otherLossDate_Cell) at LossDetailsDV.Auto.pcf: line 257, column 46
    function sortValue_119 (otherClaim :  entity.PriorClaimView) : java.lang.Object {
      return otherClaim.LossDate
    }
    
    // 'value' attribute on TextCell (id=otherInsured_Cell) at LossDetailsDV.Auto.pcf: line 261, column 49
    function sortValue_120 (otherClaim :  entity.PriorClaimView) : java.lang.Object {
      return otherClaim.Description
    }
    
    // 'validationExpression' attribute on DateInput (id=LossDate_Input) at LossDetailsDV.Auto.pcf: line 84, column 32
    function validationExpression_40 () : java.lang.Object {
      return Claim.LossDate == null || Claim.LossDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Auto.pcf: line 56, column 41
    function valueRange_20 () : java.lang.Object {
      return ext.config.claim.LossDetailsHelper_Ext.getCatastrophes(CatastropheType.TC_INTERNAL)
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Ext_Input) at LossDetailsDV.Auto.pcf: line 64, column 41
    function valueRange_27 () : java.lang.Object {
      return ext.config.claim.LossDetailsHelper_Ext.getCatastrophes(CatastropheType.TC_ISO)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_69 () : java.lang.Object {
      return Claim.RelatedPersonArray
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LossDetailsDV.Auto.pcf: line 21, column 35
    function valueRoot_2 () : java.lang.Object {
      return Claim
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LossDetailsDV.Auto.pcf: line 21, column 35
    function value_0 () : java.lang.String {
      return Claim.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_MainContactType_Input) at LossDetailsDV.Auto.pcf: line 147, column 48
    function value_101 () : typekey.PersonRelationType {
      return Claim.MainContactType
    }
    
    // 'value' attribute on DateInput (id=Notification_DateReportedToAgent_Input) at LossDetailsDV.Auto.pcf: line 164, column 40
    function value_105 () : java.util.Date {
      return Claim.DateRptdToAgent
    }
    
    // 'value' attribute on TextInput (id=Notification_AtFaultPercentage_Input) at LossDetailsDV.Auto.pcf: line 48, column 25
    function value_13 () : java.math.BigDecimal {
      return Claim.Fault
    }
    
    // 'value' attribute on RowIterator at LossDetailsDV.Auto.pcf: line 235, column 87
    function value_144 () : gw.api.database.IQueryBeanResult<entity.PriorClaimView> {
      return Claim.findPriorClaimsByPolicyNumber(Claim.Policy.PolicyNumber, {}) as gw.api.database.IQueryBeanResult<PriorClaimView>
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Auto.pcf: line 56, column 41
    function value_17 () : entity.Catastrophe {
      return Claim.Catastrophe
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Ext_Input) at LossDetailsDV.Auto.pcf: line 64, column 41
    function value_24 () : entity.Catastrophe {
      return Claim.ISOCatastrophe_Ext
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_Weather_Input) at LossDetailsDV.Auto.pcf: line 70, column 42
    function value_31 () : typekey.WeatherType {
      return Claim.Weather
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claim_EmploymentCourse_Input) at LossDetailsDV.Auto.pcf: line 75, column 41
    function value_35 () : java.lang.Boolean {
      return Claim.EmploymentInjury
    }
    
    // 'value' attribute on DateInput (id=LossDate_Input) at LossDetailsDV.Auto.pcf: line 84, column 32
    function value_41 () : java.util.Date {
      return Claim.LossDate
    }
    
    // 'value' attribute on BooleanRadioInput (id=Notification_FirstNoticeSuit_Input) at LossDetailsDV.Auto.pcf: line 100, column 40
    function value_48 () : java.lang.Boolean {
      return Claim.FirstNoticeSuit
    }
    
    // 'value' attribute on TypeKeyInput (id=LossCause_Input) at LossDetailsDV.Auto.pcf: line 28, column 39
    function value_5 () : typekey.LossCause {
      return Claim.LossCause
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_HowReported_Input) at LossDetailsDV.Auto.pcf: line 106, column 46
    function value_52 () : typekey.HowReportedType {
      return Claim.HowReported
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_66 () : entity.Contact {
      return Claim.reporter
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_ReportedByType_Input) at LossDetailsDV.Auto.pcf: line 122, column 48
    function value_76 () : typekey.PersonRelationType {
      return Claim.ReportedByType
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at LossDetailsDV.Auto.pcf: line 37, column 41
    function value_9 () : typekey.FaultRating {
      return Claim.FaultRating
    }
    
    // 'value' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_90 () : entity.Person {
      return Claim.maincontact
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Auto.pcf: line 56, column 41
    function verifyValueRangeIsAllowedType_21 ($$arg :  entity.Catastrophe[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Auto.pcf: line 56, column 41
    function verifyValueRangeIsAllowedType_21 ($$arg :  gw.api.database.IQueryBeanResult<entity.Catastrophe>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Auto.pcf: line 56, column 41
    function verifyValueRangeIsAllowedType_21 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Ext_Input) at LossDetailsDV.Auto.pcf: line 64, column 41
    function verifyValueRangeIsAllowedType_28 ($$arg :  entity.Catastrophe[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Ext_Input) at LossDetailsDV.Auto.pcf: line 64, column 41
    function verifyValueRangeIsAllowedType_28 ($$arg :  gw.api.database.IQueryBeanResult<entity.Catastrophe>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Ext_Input) at LossDetailsDV.Auto.pcf: line 64, column 41
    function verifyValueRangeIsAllowedType_28 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_70 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_70 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_70 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_94 ($$arg :  entity.Person[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_94 ($$arg :  gw.api.database.IQueryBeanResult<entity.Person>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_94 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Auto.pcf: line 56, column 41
    function verifyValueRange_22 () : void {
      var __valueRangeArg = ext.config.claim.LossDetailsHelper_Ext.getCatastrophes(CatastropheType.TC_INTERNAL)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_21(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Ext_Input) at LossDetailsDV.Auto.pcf: line 64, column 41
    function verifyValueRange_29 () : void {
      var __valueRangeArg = ext.config.claim.LossDetailsHelper_Ext.getCatastrophes(CatastropheType.TC_ISO)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_28(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_71 () : void {
      var __valueRangeArg = Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_70(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_95 () : void {
      var __valueRangeArg = Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_94(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=MainContact_Picker_Input) at LossDetailsDV.Auto.pcf: line 141, column 36
    function verifyValueType_99 () : void {
      var __valueTypeArg : entity.Person
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on Label at LossDetailsDV.Auto.pcf: line 224, column 74
    function visible_115 () : java.lang.Boolean {
      return Claim.Policy.PolicyType == PolicyType.TC_PERSONALAUTO
    }
    
    // 'visible' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_56 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_59 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_83 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Claim.maincontact), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    
  }
  
  
}